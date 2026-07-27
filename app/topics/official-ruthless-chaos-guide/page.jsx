import OfficialRuthlessChaosGuideKeywordPage, { generateMetadata } from './official-ruthless-chaos-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosGuideKeywordPage />;
}
