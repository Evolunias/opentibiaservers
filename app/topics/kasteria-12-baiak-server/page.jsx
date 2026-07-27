import Kasteria12BaiakServerKeywordPage, { generateMetadata } from './kasteria-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12BaiakServerKeywordPage />;
}
