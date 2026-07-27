import CustomMapWikiArgentinaKeywordPage, { generateMetadata } from './custom-map-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiArgentinaKeywordPage />;
}
