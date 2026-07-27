import OceraPvpHistoryKeywordPage, { generateMetadata } from './ocera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraPvpHistoryKeywordPage />;
}
