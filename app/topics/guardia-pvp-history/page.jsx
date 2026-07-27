import GuardiaPvpHistoryKeywordPage, { generateMetadata } from './guardia-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaPvpHistoryKeywordPage />;
}
