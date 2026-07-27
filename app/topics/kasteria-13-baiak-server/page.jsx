import Kasteria13BaiakServerKeywordPage, { generateMetadata } from './kasteria-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13BaiakServerKeywordPage />;
}
