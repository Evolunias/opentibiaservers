import HighrateCarlinotWebsiteKeywordPage, { generateMetadata } from './highrate-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotWebsiteKeywordPage />;
}
