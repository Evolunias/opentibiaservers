import Thornia96BaiakServerKeywordPage, { generateMetadata } from './thornia-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96BaiakServerKeywordPage />;
}
