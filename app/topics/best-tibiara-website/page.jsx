import BestTibiaraWebsiteKeywordPage, { generateMetadata } from './best-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraWebsiteKeywordPage />;
}
