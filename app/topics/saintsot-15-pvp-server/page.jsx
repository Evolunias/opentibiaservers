import Saintsot15PvpServerKeywordPage, { generateMetadata } from './saintsot-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15PvpServerKeywordPage />;
}
