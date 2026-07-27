import SoleraHistoryKeywordPage, { generateMetadata } from './solera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraHistoryKeywordPage />;
}
