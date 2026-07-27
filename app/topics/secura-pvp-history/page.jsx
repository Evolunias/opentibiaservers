import SecuraPvpHistoryKeywordPage, { generateMetadata } from './secura-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraPvpHistoryKeywordPage />;
}
