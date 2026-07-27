import BaiakServerListMexicoKeywordPage, { generateMetadata } from './baiak-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerListMexicoKeywordPage />;
}
