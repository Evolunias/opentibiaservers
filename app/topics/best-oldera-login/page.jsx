import BestOlderaLoginKeywordPage, { generateMetadata } from './best-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaLoginKeywordPage />;
}
