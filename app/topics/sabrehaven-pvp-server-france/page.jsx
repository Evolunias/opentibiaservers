import SabrehavenPvpServerFranceKeywordPage, { generateMetadata } from './sabrehaven-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPvpServerFranceKeywordPage />;
}
