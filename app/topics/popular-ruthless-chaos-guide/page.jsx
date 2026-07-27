import PopularRuthlessChaosGuideKeywordPage, { generateMetadata } from './popular-ruthless-chaos-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosGuideKeywordPage />;
}
