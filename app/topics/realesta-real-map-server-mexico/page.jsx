import RealestaRealMapServerMexicoKeywordPage, { generateMetadata } from './realesta-real-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRealMapServerMexicoKeywordPage />;
}
