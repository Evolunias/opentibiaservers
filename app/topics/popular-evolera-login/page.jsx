import PopularEvoleraLoginKeywordPage, { generateMetadata } from './popular-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraLoginKeywordPage />;
}
