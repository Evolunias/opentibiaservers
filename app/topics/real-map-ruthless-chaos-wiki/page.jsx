import RealMapRuthlessChaosWikiKeywordPage, { generateMetadata } from './real-map-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRuthlessChaosWikiKeywordPage />;
}
