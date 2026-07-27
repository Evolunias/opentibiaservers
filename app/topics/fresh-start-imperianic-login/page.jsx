import FreshStartImperianicLoginKeywordPage, { generateMetadata } from './fresh-start-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicLoginKeywordPage />;
}
