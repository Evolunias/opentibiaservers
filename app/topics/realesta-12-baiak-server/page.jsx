import Realesta12BaiakServerKeywordPage, { generateMetadata } from './realesta-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12BaiakServerKeywordPage />;
}
