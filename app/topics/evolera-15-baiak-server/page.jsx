import Evolera15BaiakServerKeywordPage, { generateMetadata } from './evolera-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15BaiakServerKeywordPage />;
}
