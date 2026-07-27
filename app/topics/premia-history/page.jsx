import PremiaHistoryKeywordPage, { generateMetadata } from './premia-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaHistoryKeywordPage />;
}
