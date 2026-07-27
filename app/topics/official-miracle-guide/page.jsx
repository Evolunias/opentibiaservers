import OfficialMiracleGuideKeywordPage, { generateMetadata } from './official-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleGuideKeywordPage />;
}
