import EvoleraRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './evolera-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraRealMapServerLatinAmericaKeywordPage />;
}
