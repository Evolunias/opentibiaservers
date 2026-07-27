import TibiaraPvpServerFranceKeywordPage, { generateMetadata } from './tibiara-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpServerFranceKeywordPage />;
}
