import OfficialRuthlessChaosOtServerKeywordPage, { generateMetadata } from './official-ruthless-chaos-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosOtServerKeywordPage />;
}
