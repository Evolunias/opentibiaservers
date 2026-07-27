import FreshStartElderaServerKeywordPage, { generateMetadata } from './fresh-start-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaServerKeywordPage />;
}
