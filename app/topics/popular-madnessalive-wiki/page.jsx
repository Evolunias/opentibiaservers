import PopularMadnessaliveWikiKeywordPage, { generateMetadata } from './popular-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveWikiKeywordPage />;
}
