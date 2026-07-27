import CurrentOriginaltibiaWebsiteKeywordPage, { generateMetadata } from './current-originaltibia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaWebsiteKeywordPage />;
}
