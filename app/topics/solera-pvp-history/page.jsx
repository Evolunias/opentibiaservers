import SoleraPvpHistoryKeywordPage, { generateMetadata } from './solera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraPvpHistoryKeywordPage />;
}
