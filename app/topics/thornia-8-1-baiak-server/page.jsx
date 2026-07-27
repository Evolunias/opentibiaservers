import Thornia81BaiakServerKeywordPage, { generateMetadata } from './thornia-8-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81BaiakServerKeywordPage />;
}
