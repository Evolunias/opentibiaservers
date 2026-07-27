import ActiveOriginaltibiaWebsiteKeywordPage, { generateMetadata } from './active-originaltibia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOriginaltibiaWebsiteKeywordPage />;
}
