import NoResetOlderaWebsiteKeywordPage, { generateMetadata } from './no-reset-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaWebsiteKeywordPage />;
}
