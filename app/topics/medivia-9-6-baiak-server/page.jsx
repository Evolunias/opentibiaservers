import Medivia96BaiakServerKeywordPage, { generateMetadata } from './medivia-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96BaiakServerKeywordPage />;
}
