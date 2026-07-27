import PopularAmeriaWebsiteKeywordPage, { generateMetadata } from './popular-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaWebsiteKeywordPage />;
}
