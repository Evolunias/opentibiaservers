import TrimeraHistoryKeywordPage, { generateMetadata } from './trimera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraHistoryKeywordPage />;
}
