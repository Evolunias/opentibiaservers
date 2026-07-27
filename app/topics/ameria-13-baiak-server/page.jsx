import Ameria13BaiakServerKeywordPage, { generateMetadata } from './ameria-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13BaiakServerKeywordPage />;
}
