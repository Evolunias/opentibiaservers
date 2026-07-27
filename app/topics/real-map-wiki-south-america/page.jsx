import RealMapWikiSouthAmericaKeywordPage, { generateMetadata } from './real-map-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiSouthAmericaKeywordPage />;
}
