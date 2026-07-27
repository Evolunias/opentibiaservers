import BestElderaWebsiteKeywordPage, { generateMetadata } from './best-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaWebsiteKeywordPage />;
}
