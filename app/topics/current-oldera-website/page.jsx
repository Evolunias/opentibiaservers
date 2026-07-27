import CurrentOlderaWebsiteKeywordPage, { generateMetadata } from './current-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaWebsiteKeywordPage />;
}
