import Medivia13BaiakServerKeywordPage, { generateMetadata } from './medivia-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13BaiakServerKeywordPage />;
}
