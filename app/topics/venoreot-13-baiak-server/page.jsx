import Venoreot13BaiakServerKeywordPage, { generateMetadata } from './venoreot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13BaiakServerKeywordPage />;
}
