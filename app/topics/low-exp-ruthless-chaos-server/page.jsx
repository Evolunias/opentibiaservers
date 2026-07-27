import LowExpRuthlessChaosServerKeywordPage, { generateMetadata } from './low-exp-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRuthlessChaosServerKeywordPage />;
}
