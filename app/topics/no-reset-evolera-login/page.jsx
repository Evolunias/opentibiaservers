import NoResetEvoleraLoginKeywordPage, { generateMetadata } from './no-reset-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraLoginKeywordPage />;
}
