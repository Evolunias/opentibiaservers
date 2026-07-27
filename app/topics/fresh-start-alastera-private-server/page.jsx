import FreshStartAlasteraPrivateServerKeywordPage, { generateMetadata } from './fresh-start-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraPrivateServerKeywordPage />;
}
