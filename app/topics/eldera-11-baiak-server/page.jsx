import Eldera11BaiakServerKeywordPage, { generateMetadata } from './eldera-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11BaiakServerKeywordPage />;
}
