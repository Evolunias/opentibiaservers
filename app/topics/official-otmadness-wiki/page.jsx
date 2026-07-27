import OfficialOtmadnessWikiKeywordPage, { generateMetadata } from './official-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessWikiKeywordPage />;
}
