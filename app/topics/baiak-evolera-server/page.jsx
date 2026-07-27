import BaiakEvoleraServerKeywordPage, { generateMetadata } from './baiak-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakEvoleraServerKeywordPage />;
}
