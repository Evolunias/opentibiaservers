import MorganaHistoryKeywordPage, { generateMetadata } from './morgana-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaHistoryKeywordPage />;
}
