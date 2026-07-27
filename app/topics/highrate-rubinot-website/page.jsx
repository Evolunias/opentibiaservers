import HighrateRubinotWebsiteKeywordPage, { generateMetadata } from './highrate-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotWebsiteKeywordPage />;
}
