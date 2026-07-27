import FunServerOldSchoolKeywordPage, { generateMetadata } from './fun-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerOldSchoolKeywordPage />;
}
