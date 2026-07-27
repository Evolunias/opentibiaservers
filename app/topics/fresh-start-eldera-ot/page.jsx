import FreshStartElderaOtKeywordPage, { generateMetadata } from './fresh-start-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaOtKeywordPage />;
}
