import Classicus11BaiakServerKeywordPage, { generateMetadata } from './classicus-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11BaiakServerKeywordPage />;
}
