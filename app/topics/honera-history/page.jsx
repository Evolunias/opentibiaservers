import HoneraHistoryKeywordPage, { generateMetadata } from './honera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraHistoryKeywordPage />;
}
