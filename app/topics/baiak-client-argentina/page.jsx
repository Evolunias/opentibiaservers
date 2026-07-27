import BaiakClientArgentinaKeywordPage, { generateMetadata } from './baiak-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientArgentinaKeywordPage />;
}
