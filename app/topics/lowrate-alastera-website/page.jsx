import LowrateAlasteraWebsiteKeywordPage, { generateMetadata } from './lowrate-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraWebsiteKeywordPage />;
}
