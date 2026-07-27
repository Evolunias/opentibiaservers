import EleraPvpHistoryKeywordPage, { generateMetadata } from './elera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraPvpHistoryKeywordPage />;
}
