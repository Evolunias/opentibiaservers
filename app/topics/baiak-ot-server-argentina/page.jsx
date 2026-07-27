import BaiakOtServerArgentinaKeywordPage, { generateMetadata } from './baiak-ot-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerArgentinaKeywordPage />;
}
