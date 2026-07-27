import FreshStartAlasteraLoginKeywordPage, { generateMetadata } from './fresh-start-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraLoginKeywordPage />;
}
