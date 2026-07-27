import LowrateRubinotWebsiteKeywordPage, { generateMetadata } from './lowrate-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotWebsiteKeywordPage />;
}
