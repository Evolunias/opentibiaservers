import Oldera11BaiakServerKeywordPage, { generateMetadata } from './oldera-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11BaiakServerKeywordPage />;
}
