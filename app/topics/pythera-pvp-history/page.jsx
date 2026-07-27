import PytheraPvpHistoryKeywordPage, { generateMetadata } from './pythera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraPvpHistoryKeywordPage />;
}
