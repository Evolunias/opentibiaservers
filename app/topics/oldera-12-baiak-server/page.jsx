import Oldera12BaiakServerKeywordPage, { generateMetadata } from './oldera-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12BaiakServerKeywordPage />;
}
