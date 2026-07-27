import Tibianus15BaiakServerKeywordPage, { generateMetadata } from './tibianus-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15BaiakServerKeywordPage />;
}
