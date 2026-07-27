import Tibijka14BaiakServerKeywordPage, { generateMetadata } from './tibijka-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14BaiakServerKeywordPage />;
}
