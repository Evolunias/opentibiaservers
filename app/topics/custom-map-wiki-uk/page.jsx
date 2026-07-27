import CustomMapWikiUkKeywordPage, { generateMetadata } from './custom-map-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiUkKeywordPage />;
}
