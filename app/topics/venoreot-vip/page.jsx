import VenoreotVipKeywordPage, { generateMetadata } from './venoreot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotVipKeywordPage />;
}
