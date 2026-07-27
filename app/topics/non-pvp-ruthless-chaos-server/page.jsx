import NonPvpRuthlessChaosServerKeywordPage, { generateMetadata } from './non-pvp-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRuthlessChaosServerKeywordPage />;
}
