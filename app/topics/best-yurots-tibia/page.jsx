import BestYurotsTibiaKeywordPage, { generateMetadata } from './best-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsTibiaKeywordPage />;
}
