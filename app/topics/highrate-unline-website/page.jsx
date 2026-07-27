import HighrateUnlineWebsiteKeywordPage, { generateMetadata } from './highrate-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineWebsiteKeywordPage />;
}
