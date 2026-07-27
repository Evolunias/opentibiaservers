import EvoluniaRealMapServersSwedenKeywordPage, { generateMetadata } from './evolunia-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRealMapServersSwedenKeywordPage />;
}
