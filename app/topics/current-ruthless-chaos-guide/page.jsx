import CurrentRuthlessChaosGuideKeywordPage, { generateMetadata } from './current-ruthless-chaos-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosGuideKeywordPage />;
}
