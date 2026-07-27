import PopularBlazeraWebsiteKeywordPage, { generateMetadata } from './popular-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraWebsiteKeywordPage />;
}
