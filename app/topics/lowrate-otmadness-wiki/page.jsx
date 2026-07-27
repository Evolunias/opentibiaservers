import LowrateOtmadnessWikiKeywordPage, { generateMetadata } from './lowrate-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessWikiKeywordPage />;
}
