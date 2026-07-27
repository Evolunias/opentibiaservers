import OfficialOriginaltibiaWebsiteKeywordPage, { generateMetadata } from './official-originaltibia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOriginaltibiaWebsiteKeywordPage />;
}
