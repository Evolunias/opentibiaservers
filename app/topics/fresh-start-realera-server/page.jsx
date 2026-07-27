import FreshStartRealeraServerKeywordPage, { generateMetadata } from './fresh-start-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealeraServerKeywordPage />;
}
