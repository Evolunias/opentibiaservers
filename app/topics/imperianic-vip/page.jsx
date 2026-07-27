import ImperianicVipKeywordPage, { generateMetadata } from './imperianic-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicVipKeywordPage />;
}
