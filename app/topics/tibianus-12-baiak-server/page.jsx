import Tibianus12BaiakServerKeywordPage, { generateMetadata } from './tibianus-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12BaiakServerKeywordPage />;
}
