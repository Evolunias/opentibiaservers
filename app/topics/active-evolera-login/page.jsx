import ActiveEvoleraLoginKeywordPage, { generateMetadata } from './active-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraLoginKeywordPage />;
}
