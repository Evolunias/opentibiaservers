import Alastera12BaiakServerKeywordPage, { generateMetadata } from './alastera-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12BaiakServerKeywordPage />;
}
