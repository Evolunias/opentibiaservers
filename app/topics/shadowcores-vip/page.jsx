import ShadowcoresVipKeywordPage, { generateMetadata } from './shadowcores-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresVipKeywordPage />;
}
