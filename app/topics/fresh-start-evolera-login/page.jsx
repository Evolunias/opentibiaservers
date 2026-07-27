import FreshStartEvoleraLoginKeywordPage, { generateMetadata } from './fresh-start-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraLoginKeywordPage />;
}
