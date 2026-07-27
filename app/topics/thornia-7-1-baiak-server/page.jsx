import Thornia71BaiakServerKeywordPage, { generateMetadata } from './thornia-7-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71BaiakServerKeywordPage />;
}
