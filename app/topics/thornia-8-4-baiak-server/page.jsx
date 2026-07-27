import Thornia84BaiakServerKeywordPage, { generateMetadata } from './thornia-8-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84BaiakServerKeywordPage />;
}
