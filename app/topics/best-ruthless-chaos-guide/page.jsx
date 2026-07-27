import BestRuthlessChaosGuideKeywordPage, { generateMetadata } from './best-ruthless-chaos-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosGuideKeywordPage />;
}
