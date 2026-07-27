import Thornia86BaiakServerKeywordPage, { generateMetadata } from './thornia-8-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86BaiakServerKeywordPage />;
}
