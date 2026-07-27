import NepreniaRealMapServersSwedenKeywordPage, { generateMetadata } from './neprenia-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapServersSwedenKeywordPage />;
}
