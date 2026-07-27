import FreshStartRubinotWebsiteKeywordPage, { generateMetadata } from './fresh-start-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotWebsiteKeywordPage />;
}
