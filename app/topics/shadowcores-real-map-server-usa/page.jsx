import ShadowcoresRealMapServerUsaKeywordPage, { generateMetadata } from './shadowcores-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresRealMapServerUsaKeywordPage />;
}
