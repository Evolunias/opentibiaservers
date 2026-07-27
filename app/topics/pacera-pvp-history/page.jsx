import PaceraPvpHistoryKeywordPage, { generateMetadata } from './pacera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraPvpHistoryKeywordPage />;
}
