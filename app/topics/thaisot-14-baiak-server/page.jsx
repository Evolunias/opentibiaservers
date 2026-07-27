import Thaisot14BaiakServerKeywordPage, { generateMetadata } from './thaisot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14BaiakServerKeywordPage />;
}
