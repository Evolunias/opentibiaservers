import Realera12BaiakServerKeywordPage, { generateMetadata } from './realera-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12BaiakServerKeywordPage />;
}
