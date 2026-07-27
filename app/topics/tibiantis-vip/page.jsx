import TibiantisVipKeywordPage, { generateMetadata } from './tibiantis-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisVipKeywordPage />;
}
