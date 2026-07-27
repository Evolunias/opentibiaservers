import CalmeraPvpHistoryKeywordPage, { generateMetadata } from './calmera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraPvpHistoryKeywordPage />;
}
