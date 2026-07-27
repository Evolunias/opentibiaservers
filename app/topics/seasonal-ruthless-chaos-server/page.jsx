import SeasonalRuthlessChaosServerKeywordPage, { generateMetadata } from './seasonal-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRuthlessChaosServerKeywordPage />;
}
