import FreshStartAlasteraServerKeywordPage, { generateMetadata } from './fresh-start-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraServerKeywordPage />;
}
