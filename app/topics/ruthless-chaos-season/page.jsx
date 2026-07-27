import RuthlessChaosSeasonKeywordPage, { generateMetadata } from './ruthless-chaos-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosSeasonKeywordPage />;
}
