import CanobVipKeywordPage, { generateMetadata } from './canob-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobVipKeywordPage />;
}
