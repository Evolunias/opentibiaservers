import FreshStartElderaClientKeywordPage, { generateMetadata } from './fresh-start-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaClientKeywordPage />;
}
