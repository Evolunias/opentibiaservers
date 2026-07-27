import CustomMapWikiLatinAmericaKeywordPage, { generateMetadata } from './custom-map-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiLatinAmericaKeywordPage />;
}
