import FreshStartRuthlessChaosWikiKeywordPage, { generateMetadata } from './fresh-start-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRuthlessChaosWikiKeywordPage />;
}
