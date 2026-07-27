import ForteraHistoryKeywordPage, { generateMetadata } from './fortera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraHistoryKeywordPage />;
}
