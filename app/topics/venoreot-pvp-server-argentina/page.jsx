import VenoreotPvpServerArgentinaKeywordPage, { generateMetadata } from './venoreot-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPvpServerArgentinaKeywordPage />;
}
