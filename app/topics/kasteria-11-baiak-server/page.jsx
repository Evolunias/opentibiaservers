import Kasteria11BaiakServerKeywordPage, { generateMetadata } from './kasteria-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11BaiakServerKeywordPage />;
}
