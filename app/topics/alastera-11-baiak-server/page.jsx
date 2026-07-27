import Alastera11BaiakServerKeywordPage, { generateMetadata } from './alastera-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11BaiakServerKeywordPage />;
}
