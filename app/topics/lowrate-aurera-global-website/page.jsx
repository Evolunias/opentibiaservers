import LowrateAureraGlobalWebsiteKeywordPage, { generateMetadata } from './lowrate-aurera-global-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalWebsiteKeywordPage />;
}
