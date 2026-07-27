import Alastera96BaiakServerKeywordPage, { generateMetadata } from './alastera-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96BaiakServerKeywordPage />;
}
