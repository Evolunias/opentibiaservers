import EvoRuthlessChaosServerKeywordPage, { generateMetadata } from './evo-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRuthlessChaosServerKeywordPage />;
}
