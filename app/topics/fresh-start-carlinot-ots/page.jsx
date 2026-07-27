import FreshStartCarlinotOtsKeywordPage, { generateMetadata } from './fresh-start-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotOtsKeywordPage />;
}
