import EterniaPvpHistoryKeywordPage, { generateMetadata } from './eternia-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaPvpHistoryKeywordPage />;
}
