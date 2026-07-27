import BaiakOlderaServerKeywordPage, { generateMetadata } from './baiak-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOlderaServerKeywordPage />;
}
