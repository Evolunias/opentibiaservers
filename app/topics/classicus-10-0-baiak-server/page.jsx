import Classicus100BaiakServerKeywordPage, { generateMetadata } from './classicus-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100BaiakServerKeywordPage />;
}
