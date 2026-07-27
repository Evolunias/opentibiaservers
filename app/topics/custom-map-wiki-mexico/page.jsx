import CustomMapWikiMexicoKeywordPage, { generateMetadata } from './custom-map-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiMexicoKeywordPage />;
}
