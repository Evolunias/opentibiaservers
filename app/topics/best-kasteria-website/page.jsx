import BestKasteriaWebsiteKeywordPage, { generateMetadata } from './best-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaWebsiteKeywordPage />;
}
