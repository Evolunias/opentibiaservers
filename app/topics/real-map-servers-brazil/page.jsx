import RealMapServersBrazilKeywordPage, { generateMetadata } from './real-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServersBrazilKeywordPage />;
}
