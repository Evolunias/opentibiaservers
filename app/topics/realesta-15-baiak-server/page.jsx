import Realesta15BaiakServerKeywordPage, { generateMetadata } from './realesta-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta15BaiakServerKeywordPage />;
}
