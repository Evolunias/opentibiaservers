import BestNepreniaWebsiteKeywordPage, { generateMetadata } from './best-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaWebsiteKeywordPage />;
}
