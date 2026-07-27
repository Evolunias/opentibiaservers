import TibiascapeRealMapServersPolandKeywordPage, { generateMetadata } from './tibiascape-real-map-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRealMapServersPolandKeywordPage />;
}
