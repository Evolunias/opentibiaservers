import LowrateRealestaWebsiteKeywordPage, { generateMetadata } from './lowrate-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaWebsiteKeywordPage />;
}
