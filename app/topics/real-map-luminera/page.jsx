import RealMapLumineraKeywordPage, { generateMetadata } from './real-map-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraKeywordPage />;
}
