import Tibianus11BaiakServerKeywordPage, { generateMetadata } from './tibianus-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11BaiakServerKeywordPage />;
}
