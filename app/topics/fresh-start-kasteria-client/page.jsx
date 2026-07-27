import FreshStartKasteriaClientKeywordPage, { generateMetadata } from './fresh-start-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaClientKeywordPage />;
}
