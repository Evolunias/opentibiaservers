import OfficialRubinotWebsiteKeywordPage, { generateMetadata } from './official-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotWebsiteKeywordPage />;
}
