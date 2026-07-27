import ActiveRubinotWebsiteKeywordPage, { generateMetadata } from './active-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotWebsiteKeywordPage />;
}
