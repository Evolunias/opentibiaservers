import Eldera12BaiakServerKeywordPage, { generateMetadata } from './eldera-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12BaiakServerKeywordPage />;
}
