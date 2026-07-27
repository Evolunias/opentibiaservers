import TopRealeraWebsiteKeywordPage, { generateMetadata } from './top-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraWebsiteKeywordPage />;
}
