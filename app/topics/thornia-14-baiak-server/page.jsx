import Thornia14BaiakServerKeywordPage, { generateMetadata } from './thornia-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14BaiakServerKeywordPage />;
}
