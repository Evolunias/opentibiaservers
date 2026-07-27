import RealMapServersUsaKeywordPage, { generateMetadata } from './real-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServersUsaKeywordPage />;
}
