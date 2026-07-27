import MeneraPvpHistoryKeywordPage, { generateMetadata } from './menera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraPvpHistoryKeywordPage />;
}
