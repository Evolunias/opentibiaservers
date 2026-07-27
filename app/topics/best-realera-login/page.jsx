import BestRealeraLoginKeywordPage, { generateMetadata } from './best-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraLoginKeywordPage />;
}
