import PopularMediviaWikiKeywordPage, { generateMetadata } from './popular-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaWikiKeywordPage />;
}
