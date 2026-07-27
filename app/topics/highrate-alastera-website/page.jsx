import HighrateAlasteraWebsiteKeywordPage, { generateMetadata } from './highrate-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraWebsiteKeywordPage />;
}
