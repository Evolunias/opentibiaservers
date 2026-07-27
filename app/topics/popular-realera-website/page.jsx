import PopularRealeraWebsiteKeywordPage, { generateMetadata } from './popular-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraWebsiteKeywordPage />;
}
