import Tibijka15BaiakServerKeywordPage, { generateMetadata } from './tibijka-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15BaiakServerKeywordPage />;
}
