import Alastera15BaiakServerKeywordPage, { generateMetadata } from './alastera-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15BaiakServerKeywordPage />;
}
