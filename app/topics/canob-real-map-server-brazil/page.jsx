import CanobRealMapServerBrazilKeywordPage, { generateMetadata } from './canob-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRealMapServerBrazilKeywordPage />;
}
