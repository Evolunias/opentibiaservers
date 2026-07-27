import FreshStartOlderaLoginKeywordPage, { generateMetadata } from './fresh-start-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaLoginKeywordPage />;
}
