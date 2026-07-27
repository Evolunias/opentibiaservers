import VenoreotPvpKeywordPage, { generateMetadata } from './venoreot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPvpKeywordPage />;
}
