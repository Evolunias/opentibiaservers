import Realesta11BaiakServerKeywordPage, { generateMetadata } from './realesta-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11BaiakServerKeywordPage />;
}
