import TopNostaltherWebsiteKeywordPage, { generateMetadata } from './top-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherWebsiteKeywordPage />;
}
