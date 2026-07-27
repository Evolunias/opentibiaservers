import FreshStartAlasteraOtsKeywordPage, { generateMetadata } from './fresh-start-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraOtsKeywordPage />;
}
