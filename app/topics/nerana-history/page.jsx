import NeranaHistoryKeywordPage, { generateMetadata } from './nerana-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaHistoryKeywordPage />;
}
