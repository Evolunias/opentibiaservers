import TibijkaCustomMapServerFranceKeywordPage, { generateMetadata } from './tibijka-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaCustomMapServerFranceKeywordPage />;
}
