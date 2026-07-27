import Carlinot13PvpServerKeywordPage, { generateMetadata } from './carlinot-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13PvpServerKeywordPage />;
}
