import ActiveRuthlessChaosServerKeywordPage, { generateMetadata } from './active-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosServerKeywordPage />;
}
