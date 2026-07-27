import TitaniaPvpHistoryKeywordPage, { generateMetadata } from './titania-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaPvpHistoryKeywordPage />;
}
