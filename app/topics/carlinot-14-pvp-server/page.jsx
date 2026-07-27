import Carlinot14PvpServerKeywordPage, { generateMetadata } from './carlinot-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14PvpServerKeywordPage />;
}
