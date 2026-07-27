import Tibijka13BaiakServerKeywordPage, { generateMetadata } from './tibijka-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13BaiakServerKeywordPage />;
}
