import LowrateElderaWebsiteKeywordPage, { generateMetadata } from './lowrate-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaWebsiteKeywordPage />;
}
