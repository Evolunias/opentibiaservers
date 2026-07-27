import CanobPvpServerFranceKeywordPage, { generateMetadata } from './canob-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpServerFranceKeywordPage />;
}
