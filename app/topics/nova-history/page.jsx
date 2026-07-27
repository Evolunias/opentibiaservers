import NovaHistoryKeywordPage, { generateMetadata } from './nova-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaHistoryKeywordPage />;
}
