import AldoraHistoryKeywordPage, { generateMetadata } from './aldora-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraHistoryKeywordPage />;
}
