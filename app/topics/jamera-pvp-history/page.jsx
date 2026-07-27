import JameraPvpHistoryKeywordPage, { generateMetadata } from './jamera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraPvpHistoryKeywordPage />;
}
