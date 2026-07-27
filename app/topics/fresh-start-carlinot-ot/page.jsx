import FreshStartCarlinotOtKeywordPage, { generateMetadata } from './fresh-start-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotOtKeywordPage />;
}
