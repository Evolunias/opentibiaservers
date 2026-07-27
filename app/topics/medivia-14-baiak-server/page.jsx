import Medivia14BaiakServerKeywordPage, { generateMetadata } from './medivia-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14BaiakServerKeywordPage />;
}
