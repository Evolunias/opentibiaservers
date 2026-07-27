import RuthlessChaosShopKeywordPage, { generateMetadata } from './ruthless-chaos-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosShopKeywordPage />;
}
