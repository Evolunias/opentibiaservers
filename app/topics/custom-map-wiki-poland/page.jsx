import CustomMapWikiPolandKeywordPage, { generateMetadata } from './custom-map-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiPolandKeywordPage />;
}
