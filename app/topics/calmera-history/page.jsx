import CalmeraHistoryKeywordPage, { generateMetadata } from './calmera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraHistoryKeywordPage />;
}
