import BestRuthlessChaosKeywordPage, { generateMetadata } from './best-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosKeywordPage />;
}
