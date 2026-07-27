import Kasteria96BaiakServerKeywordPage, { generateMetadata } from './kasteria-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96BaiakServerKeywordPage />;
}
