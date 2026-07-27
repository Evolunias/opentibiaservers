import Carlinot11PvpServerKeywordPage, { generateMetadata } from './carlinot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11PvpServerKeywordPage />;
}
