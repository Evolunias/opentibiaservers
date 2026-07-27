import ActiveOtmadnessWikiKeywordPage, { generateMetadata } from './active-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessWikiKeywordPage />;
}
