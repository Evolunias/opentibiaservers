import TibiameVipKeywordPage, { generateMetadata } from './tibiame-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameVipKeywordPage />;
}
