import LowrateRealeraWebsiteKeywordPage, { generateMetadata } from './lowrate-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraWebsiteKeywordPage />;
}
