import BestYurotsWebsiteKeywordPage, { generateMetadata } from './best-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsWebsiteKeywordPage />;
}
