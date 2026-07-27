import InfernaPvpHistoryKeywordPage, { generateMetadata } from './inferna-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaPvpHistoryKeywordPage />;
}
