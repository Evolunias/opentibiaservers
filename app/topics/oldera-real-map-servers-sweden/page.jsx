import OlderaRealMapServersSwedenKeywordPage, { generateMetadata } from './oldera-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRealMapServersSwedenKeywordPage />;
}
