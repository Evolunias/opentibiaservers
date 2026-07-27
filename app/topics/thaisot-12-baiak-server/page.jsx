import Thaisot12BaiakServerKeywordPage, { generateMetadata } from './thaisot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12BaiakServerKeywordPage />;
}
