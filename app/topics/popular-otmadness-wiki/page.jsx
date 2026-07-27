import PopularOtmadnessWikiKeywordPage, { generateMetadata } from './popular-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessWikiKeywordPage />;
}
