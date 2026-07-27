import Kasteria15BaiakServerKeywordPage, { generateMetadata } from './kasteria-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15BaiakServerKeywordPage />;
}
