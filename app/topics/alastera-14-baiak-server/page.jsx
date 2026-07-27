import Alastera14BaiakServerKeywordPage, { generateMetadata } from './alastera-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14BaiakServerKeywordPage />;
}
