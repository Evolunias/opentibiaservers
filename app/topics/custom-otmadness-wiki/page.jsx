import CustomOtmadnessWikiKeywordPage, { generateMetadata } from './custom-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessWikiKeywordPage />;
}
