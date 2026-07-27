import FreshStartRealeraKeywordPage, { generateMetadata } from './fresh-start-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealeraKeywordPage />;
}
