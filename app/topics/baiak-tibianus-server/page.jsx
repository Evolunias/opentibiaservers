import BaiakTibianusServerKeywordPage, { generateMetadata } from './baiak-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibianusServerKeywordPage />;
}
