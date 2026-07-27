import Tibiame11BaiakServerKeywordPage, { generateMetadata } from './tibiame-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11BaiakServerKeywordPage />;
}
