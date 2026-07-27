import TenebraPvpHistoryKeywordPage, { generateMetadata } from './tenebra-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraPvpHistoryKeywordPage />;
}
