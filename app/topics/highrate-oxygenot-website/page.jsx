import HighrateOxygenotWebsiteKeywordPage, { generateMetadata } from './highrate-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotWebsiteKeywordPage />;
}
