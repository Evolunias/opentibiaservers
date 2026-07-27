import NtoStarVipKeywordPage, { generateMetadata } from './nto-star-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarVipKeywordPage />;
}
