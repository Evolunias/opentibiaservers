import CustomMapWikiCanadaKeywordPage, { generateMetadata } from './custom-map-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiCanadaKeywordPage />;
}
