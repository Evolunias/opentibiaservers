import FreshStartAlasteraKeywordPage, { generateMetadata } from './fresh-start-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraKeywordPage />;
}
