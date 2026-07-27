import Thaisot100BaiakServerKeywordPage, { generateMetadata } from './thaisot-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot100BaiakServerKeywordPage />;
}
