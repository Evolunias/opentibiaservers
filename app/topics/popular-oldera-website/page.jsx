import PopularOlderaWebsiteKeywordPage, { generateMetadata } from './popular-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaWebsiteKeywordPage />;
}
