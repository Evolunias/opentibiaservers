import AldoraPvpHistoryKeywordPage, { generateMetadata } from './aldora-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraPvpHistoryKeywordPage />;
}
