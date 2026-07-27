import RealMapWikiNorthAmericaKeywordPage, { generateMetadata } from './real-map-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiNorthAmericaKeywordPage />;
}
