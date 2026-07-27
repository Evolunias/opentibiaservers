import CustomNepreniaWikiKeywordPage, { generateMetadata } from './custom-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaWikiKeywordPage />;
}
