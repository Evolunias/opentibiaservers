import BestRubinotWebsiteKeywordPage, { generateMetadata } from './best-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotWebsiteKeywordPage />;
}
