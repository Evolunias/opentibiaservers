import LowrateKasteriaWebsiteKeywordPage, { generateMetadata } from './lowrate-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaWebsiteKeywordPage />;
}
