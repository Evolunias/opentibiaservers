import BestRuthlessChaosServerKeywordPage, { generateMetadata } from './best-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosServerKeywordPage />;
}
