import LiberaHistoryKeywordPage, { generateMetadata } from './libera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaHistoryKeywordPage />;
}
