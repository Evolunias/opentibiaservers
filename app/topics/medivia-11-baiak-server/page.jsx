import Medivia11BaiakServerKeywordPage, { generateMetadata } from './medivia-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11BaiakServerKeywordPage />;
}
