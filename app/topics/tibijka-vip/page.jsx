import TibijkaVipKeywordPage, { generateMetadata } from './tibijka-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaVipKeywordPage />;
}
