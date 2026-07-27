import Venoreot14BaiakServerKeywordPage, { generateMetadata } from './venoreot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14BaiakServerKeywordPage />;
}
