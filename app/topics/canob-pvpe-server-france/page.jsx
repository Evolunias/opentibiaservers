import CanobPvpeServerFranceKeywordPage, { generateMetadata } from './canob-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpeServerFranceKeywordPage />;
}
