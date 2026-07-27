import TopRuthlessChaosWikiKeywordPage, { generateMetadata } from './top-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRuthlessChaosWikiKeywordPage />;
}
