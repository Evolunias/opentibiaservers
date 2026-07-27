import VenoreotPvpeServerFranceKeywordPage, { generateMetadata } from './venoreot-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPvpeServerFranceKeywordPage />;
}
