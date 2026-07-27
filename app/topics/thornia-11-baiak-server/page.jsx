import Thornia11BaiakServerKeywordPage, { generateMetadata } from './thornia-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11BaiakServerKeywordPage />;
}
