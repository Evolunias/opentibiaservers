import Realera11BaiakServerKeywordPage, { generateMetadata } from './realera-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11BaiakServerKeywordPage />;
}
