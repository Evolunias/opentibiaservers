import PopularRuthlessChaosWikiKeywordPage, { generateMetadata } from './popular-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosWikiKeywordPage />;
}
