import ThorniaCustomMapServerFranceKeywordPage, { generateMetadata } from './thornia-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaCustomMapServerFranceKeywordPage />;
}
