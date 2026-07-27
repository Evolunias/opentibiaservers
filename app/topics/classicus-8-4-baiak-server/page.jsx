import Classicus84BaiakServerKeywordPage, { generateMetadata } from './classicus-8-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus84BaiakServerKeywordPage />;
}
