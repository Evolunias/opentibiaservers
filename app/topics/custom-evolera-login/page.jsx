import CustomEvoleraLoginKeywordPage, { generateMetadata } from './custom-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraLoginKeywordPage />;
}
