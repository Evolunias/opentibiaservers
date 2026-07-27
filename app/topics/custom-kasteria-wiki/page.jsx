import CustomKasteriaWikiKeywordPage, { generateMetadata } from './custom-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaWikiKeywordPage />;
}
