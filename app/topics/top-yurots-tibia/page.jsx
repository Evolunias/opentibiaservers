import TopYurotsTibiaKeywordPage, { generateMetadata } from './top-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsTibiaKeywordPage />;
}
