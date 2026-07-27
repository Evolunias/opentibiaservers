import FreshStartRealestaServerKeywordPage, { generateMetadata } from './fresh-start-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaServerKeywordPage />;
}
