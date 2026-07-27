import PopularElderaWebsiteKeywordPage, { generateMetadata } from './popular-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaWebsiteKeywordPage />;
}
