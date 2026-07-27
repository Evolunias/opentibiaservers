import TopAmeriaWebsiteKeywordPage, { generateMetadata } from './top-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaWebsiteKeywordPage />;
}
