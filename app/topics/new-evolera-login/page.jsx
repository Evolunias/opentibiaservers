import NewEvoleraLoginKeywordPage, { generateMetadata } from './new-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraLoginKeywordPage />;
}
