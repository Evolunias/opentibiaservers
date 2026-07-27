import BestEvoleraLoginKeywordPage, { generateMetadata } from './best-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraLoginKeywordPage />;
}
