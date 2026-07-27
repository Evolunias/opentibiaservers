import FreshStartElderaLoginKeywordPage, { generateMetadata } from './fresh-start-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaLoginKeywordPage />;
}
