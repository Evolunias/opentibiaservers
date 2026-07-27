import CanobRealMapServerArgentinaKeywordPage, { generateMetadata } from './canob-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRealMapServerArgentinaKeywordPage />;
}
