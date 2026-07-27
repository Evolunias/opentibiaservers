import BestOxygenotWebsiteKeywordPage, { generateMetadata } from './best-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotWebsiteKeywordPage />;
}
