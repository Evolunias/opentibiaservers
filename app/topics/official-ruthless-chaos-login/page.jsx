import OfficialRuthlessChaosLoginKeywordPage, { generateMetadata } from './official-ruthless-chaos-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosLoginKeywordPage />;
}
