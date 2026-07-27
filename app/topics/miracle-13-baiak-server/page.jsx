import Miracle13BaiakServerKeywordPage, { generateMetadata } from './miracle-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13BaiakServerKeywordPage />;
}
