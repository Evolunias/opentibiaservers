import NostaltherRealMapServerUsaKeywordPage, { generateMetadata } from './nostalther-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRealMapServerUsaKeywordPage />;
}
