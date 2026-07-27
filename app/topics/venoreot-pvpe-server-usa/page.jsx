import VenoreotPvpeServerUsaKeywordPage, { generateMetadata } from './venoreot-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPvpeServerUsaKeywordPage />;
}
