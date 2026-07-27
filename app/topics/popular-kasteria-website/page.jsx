import PopularKasteriaWebsiteKeywordPage, { generateMetadata } from './popular-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaWebsiteKeywordPage />;
}
