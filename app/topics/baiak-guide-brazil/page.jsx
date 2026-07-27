import BaiakGuideBrazilKeywordPage, { generateMetadata } from './baiak-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideBrazilKeywordPage />;
}
