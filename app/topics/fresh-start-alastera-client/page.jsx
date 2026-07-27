import FreshStartAlasteraClientKeywordPage, { generateMetadata } from './fresh-start-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraClientKeywordPage />;
}
