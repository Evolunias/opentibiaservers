import AsteraHistoryKeywordPage, { generateMetadata } from './astera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraHistoryKeywordPage />;
}
