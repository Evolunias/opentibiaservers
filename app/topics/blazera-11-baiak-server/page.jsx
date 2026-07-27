import Blazera11BaiakServerKeywordPage, { generateMetadata } from './blazera-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11BaiakServerKeywordPage />;
}
