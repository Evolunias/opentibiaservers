import Miracle11BaiakServerKeywordPage, { generateMetadata } from './miracle-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11BaiakServerKeywordPage />;
}
