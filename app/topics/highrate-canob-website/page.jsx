import HighrateCanobWebsiteKeywordPage, { generateMetadata } from './highrate-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobWebsiteKeywordPage />;
}
