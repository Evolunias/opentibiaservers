import BaiakServersArgentinaKeywordPage, { generateMetadata } from './baiak-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersArgentinaKeywordPage />;
}
