import CustomMapWikiUsaKeywordPage, { generateMetadata } from './custom-map-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiUsaKeywordPage />;
}
