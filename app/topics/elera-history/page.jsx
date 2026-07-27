import EleraHistoryKeywordPage, { generateMetadata } from './elera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraHistoryKeywordPage />;
}
