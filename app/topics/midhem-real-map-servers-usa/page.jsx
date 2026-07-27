import MidhemRealMapServersUsaKeywordPage, { generateMetadata } from './midhem-real-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRealMapServersUsaKeywordPage />;
}
