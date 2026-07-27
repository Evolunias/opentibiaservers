import RealMapTibiascapeKeywordPage, { generateMetadata } from './real-map-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeKeywordPage />;
}
