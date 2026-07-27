import CelestaHistoryKeywordPage, { generateMetadata } from './celesta-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaHistoryKeywordPage />;
}
