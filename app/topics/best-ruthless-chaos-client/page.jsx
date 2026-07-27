import BestRuthlessChaosClientKeywordPage, { generateMetadata } from './best-ruthless-chaos-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosClientKeywordPage />;
}
