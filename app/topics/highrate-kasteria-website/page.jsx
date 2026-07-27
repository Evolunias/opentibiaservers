import HighrateKasteriaWebsiteKeywordPage, { generateMetadata } from './highrate-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaWebsiteKeywordPage />;
}
