import ActiveRuthlessChaosGuideKeywordPage, { generateMetadata } from './active-ruthless-chaos-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosGuideKeywordPage />;
}
