import RealMapWikiFranceKeywordPage, { generateMetadata } from './real-map-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiFranceKeywordPage />;
}
