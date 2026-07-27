import NeranaPvpHistoryKeywordPage, { generateMetadata } from './nerana-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaPvpHistoryKeywordPage />;
}
