import DanubiaPvpHistoryKeywordPage, { generateMetadata } from './danubia-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaPvpHistoryKeywordPage />;
}
