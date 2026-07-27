import Tibijka12BaiakServerKeywordPage, { generateMetadata } from './tibijka-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12BaiakServerKeywordPage />;
}
