import PopularNepreniaWebsiteKeywordPage, { generateMetadata } from './popular-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaWebsiteKeywordPage />;
}
