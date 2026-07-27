import FunServerSeasonKeywordPage, { generateMetadata } from './fun-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerSeasonKeywordPage />;
}
