import BestCyntaraLoginKeywordPage, { generateMetadata } from './best-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraLoginKeywordPage />;
}
