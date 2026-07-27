import LowrateNilotWebsiteKeywordPage, { generateMetadata } from './lowrate-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotWebsiteKeywordPage />;
}
