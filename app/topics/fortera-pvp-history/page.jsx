import ForteraPvpHistoryKeywordPage, { generateMetadata } from './fortera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraPvpHistoryKeywordPage />;
}
