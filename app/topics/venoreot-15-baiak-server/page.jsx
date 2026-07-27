import Venoreot15BaiakServerKeywordPage, { generateMetadata } from './venoreot-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15BaiakServerKeywordPage />;
}
