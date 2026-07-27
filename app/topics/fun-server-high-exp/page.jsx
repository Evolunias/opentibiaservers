import FunServerHighExpKeywordPage, { generateMetadata } from './fun-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerHighExpKeywordPage />;
}
