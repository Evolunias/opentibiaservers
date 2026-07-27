import Kasteria80BaiakServerKeywordPage, { generateMetadata } from './kasteria-8-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80BaiakServerKeywordPage />;
}
