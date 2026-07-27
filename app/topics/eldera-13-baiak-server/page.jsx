import Eldera13BaiakServerKeywordPage, { generateMetadata } from './eldera-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13BaiakServerKeywordPage />;
}
