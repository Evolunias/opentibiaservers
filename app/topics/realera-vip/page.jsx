import RealeraVipKeywordPage, { generateMetadata } from './realera-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraVipKeywordPage />;
}
