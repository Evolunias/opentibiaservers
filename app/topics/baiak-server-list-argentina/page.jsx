import BaiakServerListArgentinaKeywordPage, { generateMetadata } from './baiak-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerListArgentinaKeywordPage />;
}
