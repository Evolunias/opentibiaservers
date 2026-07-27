import TibiaOtServerPvpKeywordPage, { generateMetadata } from './tibia-ot-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerPvpKeywordPage />;
}
