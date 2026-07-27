import CanobRealMapServersBrazilKeywordPage, { generateMetadata } from './canob-real-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRealMapServersBrazilKeywordPage />;
}
