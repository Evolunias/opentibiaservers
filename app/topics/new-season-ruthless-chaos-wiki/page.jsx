import NewSeasonRuthlessChaosWikiKeywordPage, { generateMetadata } from './new-season-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRuthlessChaosWikiKeywordPage />;
}
