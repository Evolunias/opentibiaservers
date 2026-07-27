import MidhemRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './midhem-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRealMapServerLatinAmericaKeywordPage />;
}
