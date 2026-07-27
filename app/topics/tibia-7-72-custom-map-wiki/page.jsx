import Tibia772CustomMapWikiKeywordPage, { generateMetadata } from './tibia-7-72-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772CustomMapWikiKeywordPage />;
}
