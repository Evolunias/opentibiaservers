import FreshStartAlasteraOtServerKeywordPage, { generateMetadata } from './fresh-start-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraOtServerKeywordPage />;
}
