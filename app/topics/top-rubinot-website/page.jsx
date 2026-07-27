import TopRubinotWebsiteKeywordPage, { generateMetadata } from './top-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotWebsiteKeywordPage />;
}
