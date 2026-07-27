import Oldera13BaiakServerKeywordPage, { generateMetadata } from './oldera-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13BaiakServerKeywordPage />;
}
