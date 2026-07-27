import Ameria15BaiakServerKeywordPage, { generateMetadata } from './ameria-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15BaiakServerKeywordPage />;
}
