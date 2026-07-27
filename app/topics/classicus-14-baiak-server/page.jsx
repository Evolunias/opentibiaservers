import Classicus14BaiakServerKeywordPage, { generateMetadata } from './classicus-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14BaiakServerKeywordPage />;
}
