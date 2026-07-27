import BestTibianusWebsiteKeywordPage, { generateMetadata } from './best-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusWebsiteKeywordPage />;
}
