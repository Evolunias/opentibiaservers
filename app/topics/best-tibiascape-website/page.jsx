import BestTibiascapeWebsiteKeywordPage, { generateMetadata } from './best-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeWebsiteKeywordPage />;
}
