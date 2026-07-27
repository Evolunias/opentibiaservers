import HighrateNostaltherWebsiteKeywordPage, { generateMetadata } from './highrate-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherWebsiteKeywordPage />;
}
