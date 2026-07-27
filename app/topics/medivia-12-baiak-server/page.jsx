import Medivia12BaiakServerKeywordPage, { generateMetadata } from './medivia-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12BaiakServerKeywordPage />;
}
