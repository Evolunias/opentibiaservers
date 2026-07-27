import MidhemRealMapServersLatinAmericaKeywordPage, { generateMetadata } from './midhem-real-map-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRealMapServersLatinAmericaKeywordPage />;
}
