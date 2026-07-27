import CustomMapWikiGermanyKeywordPage, { generateMetadata } from './custom-map-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiGermanyKeywordPage />;
}
