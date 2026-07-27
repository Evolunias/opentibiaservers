import DanubiaHistoryKeywordPage, { generateMetadata } from './danubia-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaHistoryKeywordPage />;
}
