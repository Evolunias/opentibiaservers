import UniteraHistoryKeywordPage, { generateMetadata } from './unitera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraHistoryKeywordPage />;
}
