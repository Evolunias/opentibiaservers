import FreshStartRealestaKeywordPage, { generateMetadata } from './fresh-start-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaKeywordPage />;
}
