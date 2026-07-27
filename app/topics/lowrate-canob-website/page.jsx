import LowrateCanobWebsiteKeywordPage, { generateMetadata } from './lowrate-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobWebsiteKeywordPage />;
}
