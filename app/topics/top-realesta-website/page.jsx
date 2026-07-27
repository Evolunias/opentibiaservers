import TopRealestaWebsiteKeywordPage, { generateMetadata } from './top-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaWebsiteKeywordPage />;
}
