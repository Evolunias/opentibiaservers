import Thaisot86BaiakServerKeywordPage, { generateMetadata } from './thaisot-8-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot86BaiakServerKeywordPage />;
}
