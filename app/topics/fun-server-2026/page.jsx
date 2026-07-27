import FunServer2026KeywordPage, { generateMetadata } from './fun-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServer2026KeywordPage />;
}
