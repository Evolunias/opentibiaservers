import FunServerRealMapKeywordPage, { generateMetadata } from './fun-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerRealMapKeywordPage />;
}
