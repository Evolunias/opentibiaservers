import NostaltherRealMapServerPolandKeywordPage, { generateMetadata } from './nostalther-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRealMapServerPolandKeywordPage />;
}
