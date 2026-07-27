import OfficialRuthlessChaosOtsKeywordPage, { generateMetadata } from './official-ruthless-chaos-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosOtsKeywordPage />;
}
