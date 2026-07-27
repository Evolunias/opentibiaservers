import Kasteria86BaiakServerKeywordPage, { generateMetadata } from './kasteria-8-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86BaiakServerKeywordPage />;
}
