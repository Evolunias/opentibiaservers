import OfficialOxygenotGuideKeywordPage, { generateMetadata } from './official-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotGuideKeywordPage />;
}
