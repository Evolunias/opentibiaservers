import NilotRealMapServerBrazilKeywordPage, { generateMetadata } from './nilot-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotRealMapServerBrazilKeywordPage />;
}
