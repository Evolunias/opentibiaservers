import CurrentOtmadnessWikiKeywordPage, { generateMetadata } from './current-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessWikiKeywordPage />;
}
