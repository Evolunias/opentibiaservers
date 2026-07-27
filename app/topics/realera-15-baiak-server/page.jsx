import Realera15BaiakServerKeywordPage, { generateMetadata } from './realera-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15BaiakServerKeywordPage />;
}
