import BaiakAmeriaServerKeywordPage, { generateMetadata } from './baiak-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakAmeriaServerKeywordPage />;
}
