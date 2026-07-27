import FunServerKeywordPage, { generateMetadata } from './fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerKeywordPage />;
}
