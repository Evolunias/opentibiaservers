import DoleraHistoryKeywordPage, { generateMetadata } from './dolera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraHistoryKeywordPage />;
}
