import BestAmeriaWebsiteKeywordPage, { generateMetadata } from './best-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaWebsiteKeywordPage />;
}
