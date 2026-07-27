import Thornia12BaiakServerKeywordPage, { generateMetadata } from './thornia-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12BaiakServerKeywordPage />;
}
