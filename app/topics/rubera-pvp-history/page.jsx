import RuberaPvpHistoryKeywordPage, { generateMetadata } from './rubera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaPvpHistoryKeywordPage />;
}
