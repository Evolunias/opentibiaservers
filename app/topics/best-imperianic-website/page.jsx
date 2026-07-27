import BestImperianicWebsiteKeywordPage, { generateMetadata } from './best-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicWebsiteKeywordPage />;
}
