import RefugiaHistoryKeywordPage, { generateMetadata } from './refugia-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaHistoryKeywordPage />;
}
