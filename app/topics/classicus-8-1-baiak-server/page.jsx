import Classicus81BaiakServerKeywordPage, { generateMetadata } from './classicus-8-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81BaiakServerKeywordPage />;
}
