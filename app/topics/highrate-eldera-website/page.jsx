import HighrateElderaWebsiteKeywordPage, { generateMetadata } from './highrate-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaWebsiteKeywordPage />;
}
