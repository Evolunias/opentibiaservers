import FunServerClientKeywordPage, { generateMetadata } from './fun-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerClientKeywordPage />;
}
