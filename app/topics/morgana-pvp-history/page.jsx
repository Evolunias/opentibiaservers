import MorganaPvpHistoryKeywordPage, { generateMetadata } from './morgana-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaPvpHistoryKeywordPage />;
}
