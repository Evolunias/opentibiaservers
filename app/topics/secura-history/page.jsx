import SecuraHistoryKeywordPage, { generateMetadata } from './secura-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraHistoryKeywordPage />;
}
