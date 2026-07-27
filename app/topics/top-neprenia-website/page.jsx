import TopNepreniaWebsiteKeywordPage, { generateMetadata } from './top-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaWebsiteKeywordPage />;
}
