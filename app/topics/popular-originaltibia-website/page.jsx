import PopularOriginaltibiaWebsiteKeywordPage, { generateMetadata } from './popular-originaltibia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaWebsiteKeywordPage />;
}
