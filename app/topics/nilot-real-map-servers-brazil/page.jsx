import NilotRealMapServersBrazilKeywordPage, { generateMetadata } from './nilot-real-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotRealMapServersBrazilKeywordPage />;
}
