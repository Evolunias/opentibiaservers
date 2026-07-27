import Evolera11BaiakServerKeywordPage, { generateMetadata } from './evolera-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera11BaiakServerKeywordPage />;
}
