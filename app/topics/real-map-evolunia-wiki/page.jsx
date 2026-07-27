import RealMapEvoluniaWikiKeywordPage, { generateMetadata } from './real-map-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaWikiKeywordPage />;
}
