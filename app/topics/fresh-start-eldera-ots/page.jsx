import FreshStartElderaOtsKeywordPage, { generateMetadata } from './fresh-start-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaOtsKeywordPage />;
}
