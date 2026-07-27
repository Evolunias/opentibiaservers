import TopOxygenotGuideKeywordPage, { generateMetadata } from './top-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotGuideKeywordPage />;
}
