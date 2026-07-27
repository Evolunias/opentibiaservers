import FreshStartAlasteraOtKeywordPage, { generateMetadata } from './fresh-start-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraOtKeywordPage />;
}
