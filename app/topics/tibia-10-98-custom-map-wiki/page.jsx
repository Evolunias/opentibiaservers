import Tibia1098CustomMapWikiKeywordPage, { generateMetadata } from './tibia-10-98-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098CustomMapWikiKeywordPage />;
}
