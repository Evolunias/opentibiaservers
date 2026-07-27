import Saintsot11PvpServerKeywordPage, { generateMetadata } from './saintsot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11PvpServerKeywordPage />;
}
