import RuthlessChaosGuideKeywordPage, { generateMetadata } from './ruthless-chaos-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosGuideKeywordPage />;
}
