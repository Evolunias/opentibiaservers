import TibianusRealMapServersSwedenKeywordPage, { generateMetadata } from './tibianus-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRealMapServersSwedenKeywordPage />;
}
