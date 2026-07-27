import Thaisot81BaiakServerKeywordPage, { generateMetadata } from './thaisot-8-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81BaiakServerKeywordPage />;
}
