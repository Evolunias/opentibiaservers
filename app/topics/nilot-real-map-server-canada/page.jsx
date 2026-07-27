import NilotRealMapServerCanadaKeywordPage, { generateMetadata } from './nilot-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotRealMapServerCanadaKeywordPage />;
}
