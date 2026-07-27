import BestUnlineOpenTibiaKeywordPage, { generateMetadata } from './best-unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineOpenTibiaKeywordPage />;
}
