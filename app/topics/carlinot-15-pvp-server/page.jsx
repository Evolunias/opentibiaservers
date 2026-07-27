import Carlinot15PvpServerKeywordPage, { generateMetadata } from './carlinot-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15PvpServerKeywordPage />;
}
