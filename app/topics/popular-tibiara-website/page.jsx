import PopularTibiaraWebsiteKeywordPage, { generateMetadata } from './popular-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraWebsiteKeywordPage />;
}
