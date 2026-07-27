import OfficialRuthlessChaosWikiKeywordPage, { generateMetadata } from './official-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosWikiKeywordPage />;
}
