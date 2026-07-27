import FunServerActiveKeywordPage, { generateMetadata } from './fun-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerActiveKeywordPage />;
}
