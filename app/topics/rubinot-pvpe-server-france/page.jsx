import RubinotPvpeServerFranceKeywordPage, { generateMetadata } from './rubinot-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpeServerFranceKeywordPage />;
}
