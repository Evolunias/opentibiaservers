import LowrateNostaltherWebsiteKeywordPage, { generateMetadata } from './lowrate-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherWebsiteKeywordPage />;
}
