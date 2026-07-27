import NilotRealMapServerPolandKeywordPage, { generateMetadata } from './nilot-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotRealMapServerPolandKeywordPage />;
}
