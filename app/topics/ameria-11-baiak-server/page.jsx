import Ameria11BaiakServerKeywordPage, { generateMetadata } from './ameria-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11BaiakServerKeywordPage />;
}
