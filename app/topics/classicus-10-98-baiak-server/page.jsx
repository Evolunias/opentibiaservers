import Classicus1098BaiakServerKeywordPage, { generateMetadata } from './classicus-10-98-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098BaiakServerKeywordPage />;
}
