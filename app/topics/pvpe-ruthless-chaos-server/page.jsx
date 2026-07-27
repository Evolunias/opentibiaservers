import PvpeRuthlessChaosServerKeywordPage, { generateMetadata } from './pvpe-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRuthlessChaosServerKeywordPage />;
}
