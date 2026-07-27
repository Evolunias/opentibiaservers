import Thaisot13BaiakServerKeywordPage, { generateMetadata } from './thaisot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13BaiakServerKeywordPage />;
}
