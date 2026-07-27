import RealMapClientUsaKeywordPage, { generateMetadata } from './real-map-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientUsaKeywordPage />;
}
