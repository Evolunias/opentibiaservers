import AmeraPvpHistoryKeywordPage, { generateMetadata } from './amera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraPvpHistoryKeywordPage />;
}
