import KyraPvpHistoryKeywordPage, { generateMetadata } from './kyra-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraPvpHistoryKeywordPage />;
}
