import PopularRubinotWebsiteKeywordPage, { generateMetadata } from './popular-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotWebsiteKeywordPage />;
}
