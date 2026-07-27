import FunServerPolandKeywordPage, { generateMetadata } from './fun-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerPolandKeywordPage />;
}
