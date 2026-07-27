import IsaraPvpHistoryKeywordPage, { generateMetadata } from './isara-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraPvpHistoryKeywordPage />;
}
