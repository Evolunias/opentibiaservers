import FreshStartRealestaClientKeywordPage, { generateMetadata } from './fresh-start-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaClientKeywordPage />;
}
