import FreshStartElderaWebsiteKeywordPage, { generateMetadata } from './fresh-start-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaWebsiteKeywordPage />;
}
