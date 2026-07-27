import Classicus13BaiakServerKeywordPage, { generateMetadata } from './classicus-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13BaiakServerKeywordPage />;
}
