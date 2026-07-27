import Venoreot12BaiakServerKeywordPage, { generateMetadata } from './venoreot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12BaiakServerKeywordPage />;
}
