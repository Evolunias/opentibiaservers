import ReneraPvpHistoryKeywordPage, { generateMetadata } from './renera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraPvpHistoryKeywordPage />;
}
