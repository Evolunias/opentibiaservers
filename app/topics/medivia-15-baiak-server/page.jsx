import Medivia15BaiakServerKeywordPage, { generateMetadata } from './medivia-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15BaiakServerKeywordPage />;
}
