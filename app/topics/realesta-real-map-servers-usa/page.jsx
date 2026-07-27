import RealestaRealMapServersUsaKeywordPage, { generateMetadata } from './realesta-real-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRealMapServersUsaKeywordPage />;
}
