import ActiveRuthlessChaosWikiKeywordPage, { generateMetadata } from './active-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosWikiKeywordPage />;
}
