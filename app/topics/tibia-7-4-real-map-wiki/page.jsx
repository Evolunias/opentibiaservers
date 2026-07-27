import Tibia74RealMapWikiKeywordPage, { generateMetadata } from './tibia-7-4-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapWikiKeywordPage />;
}
