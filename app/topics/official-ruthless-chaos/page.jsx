import OfficialRuthlessChaosKeywordPage, { generateMetadata } from './official-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosKeywordPage />;
}
