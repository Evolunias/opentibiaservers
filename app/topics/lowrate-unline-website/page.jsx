import LowrateUnlineWebsiteKeywordPage, { generateMetadata } from './lowrate-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineWebsiteKeywordPage />;
}
