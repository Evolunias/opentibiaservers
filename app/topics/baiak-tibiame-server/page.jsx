import BaiakTibiameServerKeywordPage, { generateMetadata } from './baiak-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiameServerKeywordPage />;
}
