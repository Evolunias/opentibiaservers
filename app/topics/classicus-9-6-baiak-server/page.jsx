import Classicus96BaiakServerKeywordPage, { generateMetadata } from './classicus-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96BaiakServerKeywordPage />;
}
