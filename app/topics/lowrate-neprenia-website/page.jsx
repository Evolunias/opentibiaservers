import LowrateNepreniaWebsiteKeywordPage, { generateMetadata } from './lowrate-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaWebsiteKeywordPage />;
}
