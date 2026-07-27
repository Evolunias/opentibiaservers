import FunServerGermanyKeywordPage, { generateMetadata } from './fun-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerGermanyKeywordPage />;
}
