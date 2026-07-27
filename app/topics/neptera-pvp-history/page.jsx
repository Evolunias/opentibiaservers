import NepteraPvpHistoryKeywordPage, { generateMetadata } from './neptera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraPvpHistoryKeywordPage />;
}
