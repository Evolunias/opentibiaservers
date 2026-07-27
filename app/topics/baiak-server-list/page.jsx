import BaiakServerListKeywordPage, { generateMetadata } from './baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerListKeywordPage />;
}
