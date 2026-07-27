import OfficialRuthlessChaosOfficialKeywordPage, { generateMetadata } from './official-ruthless-chaos-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosOfficialKeywordPage />;
}
