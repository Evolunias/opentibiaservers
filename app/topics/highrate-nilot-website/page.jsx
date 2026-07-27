import HighrateNilotWebsiteKeywordPage, { generateMetadata } from './highrate-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotWebsiteKeywordPage />;
}
