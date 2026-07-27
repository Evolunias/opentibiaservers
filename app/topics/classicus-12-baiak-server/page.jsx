import Classicus12BaiakServerKeywordPage, { generateMetadata } from './classicus-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12BaiakServerKeywordPage />;
}
