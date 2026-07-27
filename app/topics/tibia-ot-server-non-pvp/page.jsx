import TibiaOtServerNonPvpKeywordPage, { generateMetadata } from './tibia-ot-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerNonPvpKeywordPage />;
}
