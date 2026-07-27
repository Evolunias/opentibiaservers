import RubinotPvpServerFranceKeywordPage, { generateMetadata } from './rubinot-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpServerFranceKeywordPage />;
}
