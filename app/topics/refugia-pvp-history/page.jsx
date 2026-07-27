import RefugiaPvpHistoryKeywordPage, { generateMetadata } from './refugia-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaPvpHistoryKeywordPage />;
}
