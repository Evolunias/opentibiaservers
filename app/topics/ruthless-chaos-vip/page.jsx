import RuthlessChaosVipKeywordPage, { generateMetadata } from './ruthless-chaos-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosVipKeywordPage />;
}
