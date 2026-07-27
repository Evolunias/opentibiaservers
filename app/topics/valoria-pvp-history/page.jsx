import ValoriaPvpHistoryKeywordPage, { generateMetadata } from './valoria-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaPvpHistoryKeywordPage />;
}
