import PopularMidhemWebsiteKeywordPage, { generateMetadata } from './popular-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemWebsiteKeywordPage />;
}
