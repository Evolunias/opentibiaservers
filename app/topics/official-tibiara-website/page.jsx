import OfficialTibiaraWebsiteKeywordPage, { generateMetadata } from './official-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraWebsiteKeywordPage />;
}
