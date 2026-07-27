import Classicus71BaiakServerKeywordPage, { generateMetadata } from './classicus-7-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71BaiakServerKeywordPage />;
}
