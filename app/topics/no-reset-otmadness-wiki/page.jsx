import NoResetOtmadnessWikiKeywordPage, { generateMetadata } from './no-reset-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessWikiKeywordPage />;
}
