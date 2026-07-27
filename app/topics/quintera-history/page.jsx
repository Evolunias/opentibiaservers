import QuinteraHistoryKeywordPage, { generateMetadata } from './quintera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraHistoryKeywordPage />;
}
