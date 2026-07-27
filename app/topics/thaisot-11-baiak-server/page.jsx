import Thaisot11BaiakServerKeywordPage, { generateMetadata } from './thaisot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11BaiakServerKeywordPage />;
}
