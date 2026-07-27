import BestRuthlessChaosWikiKeywordPage, { generateMetadata } from './best-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosWikiKeywordPage />;
}
