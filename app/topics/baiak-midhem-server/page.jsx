import BaiakMidhemServerKeywordPage, { generateMetadata } from './baiak-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakMidhemServerKeywordPage />;
}
