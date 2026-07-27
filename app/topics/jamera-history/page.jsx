import JameraHistoryKeywordPage, { generateMetadata } from './jamera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraHistoryKeywordPage />;
}
