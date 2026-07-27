import FreshStartServerArgentinaKeywordPage, { generateMetadata } from './fresh-start-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerArgentinaKeywordPage />;
}
