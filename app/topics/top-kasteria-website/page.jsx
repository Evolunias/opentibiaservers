import TopKasteriaWebsiteKeywordPage, { generateMetadata } from './top-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaWebsiteKeywordPage />;
}
