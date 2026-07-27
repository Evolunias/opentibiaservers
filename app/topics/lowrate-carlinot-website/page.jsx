import LowrateCarlinotWebsiteKeywordPage, { generateMetadata } from './lowrate-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotWebsiteKeywordPage />;
}
