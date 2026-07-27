import Tibijka11BaiakServerKeywordPage, { generateMetadata } from './tibijka-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11BaiakServerKeywordPage />;
}
