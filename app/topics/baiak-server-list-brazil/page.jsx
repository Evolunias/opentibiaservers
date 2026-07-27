import BaiakServerListBrazilKeywordPage, { generateMetadata } from './baiak-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerListBrazilKeywordPage />;
}
