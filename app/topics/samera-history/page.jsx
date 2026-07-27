import SameraHistoryKeywordPage, { generateMetadata } from './samera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraHistoryKeywordPage />;
}
