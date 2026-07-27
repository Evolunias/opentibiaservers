import Miracle12BaiakServerKeywordPage, { generateMetadata } from './miracle-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12BaiakServerKeywordPage />;
}
