import Thaisot15BaiakServerKeywordPage, { generateMetadata } from './thaisot-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15BaiakServerKeywordPage />;
}
