import FunServerListKeywordPage, { generateMetadata } from './fun-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerListKeywordPage />;
}
