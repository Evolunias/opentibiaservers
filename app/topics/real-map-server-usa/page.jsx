import RealMapServerUsaKeywordPage, { generateMetadata } from './real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerUsaKeywordPage />;
}
