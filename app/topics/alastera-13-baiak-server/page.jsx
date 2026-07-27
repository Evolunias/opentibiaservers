import Alastera13BaiakServerKeywordPage, { generateMetadata } from './alastera-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13BaiakServerKeywordPage />;
}
