import Thaisot71BaiakServerKeywordPage, { generateMetadata } from './thaisot-7-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71BaiakServerKeywordPage />;
}
