import OceraHistoryKeywordPage, { generateMetadata } from './ocera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraHistoryKeywordPage />;
}
