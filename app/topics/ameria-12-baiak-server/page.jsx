import Ameria12BaiakServerKeywordPage, { generateMetadata } from './ameria-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12BaiakServerKeywordPage />;
}
