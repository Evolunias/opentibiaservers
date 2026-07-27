import Venoreot11BaiakServerKeywordPage, { generateMetadata } from './venoreot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11BaiakServerKeywordPage />;
}
