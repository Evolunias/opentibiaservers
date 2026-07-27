import Kasteria84BaiakServerKeywordPage, { generateMetadata } from './kasteria-8-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria84BaiakServerKeywordPage />;
}
