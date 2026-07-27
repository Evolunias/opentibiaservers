import CarlinotRealMapServersSwedenKeywordPage, { generateMetadata } from './carlinot-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRealMapServersSwedenKeywordPage />;
}
