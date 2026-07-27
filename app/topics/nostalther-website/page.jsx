import NostaltherWebsiteKeywordPage, { generateMetadata } from './nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherWebsiteKeywordPage />;
}
