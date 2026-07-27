import HighrateOtmadnessWikiKeywordPage, { generateMetadata } from './highrate-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessWikiKeywordPage />;
}
