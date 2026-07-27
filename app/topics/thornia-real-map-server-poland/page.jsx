import ThorniaRealMapServerPolandKeywordPage, { generateMetadata } from './thornia-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaRealMapServerPolandKeywordPage />;
}
