import TopTibiaraWebsiteKeywordPage, { generateMetadata } from './top-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraWebsiteKeywordPage />;
}
