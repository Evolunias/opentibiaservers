import Tibianus14BaiakServerKeywordPage, { generateMetadata } from './tibianus-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14BaiakServerKeywordPage />;
}
