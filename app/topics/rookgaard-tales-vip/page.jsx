import RookgaardTalesVipKeywordPage, { generateMetadata } from './rookgaard-tales-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesVipKeywordPage />;
}
