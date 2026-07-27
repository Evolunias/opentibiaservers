import RealMapNtoStarWikiKeywordPage, { generateMetadata } from './real-map-nto-star-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarWikiKeywordPage />;
}
