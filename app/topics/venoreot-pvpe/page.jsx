import VenoreotPvpeKeywordPage, { generateMetadata } from './venoreot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPvpeKeywordPage />;
}
