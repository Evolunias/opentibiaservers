import Tibianus13BaiakServerKeywordPage, { generateMetadata } from './tibianus-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13BaiakServerKeywordPage />;
}
