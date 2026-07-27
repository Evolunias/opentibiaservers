import EvoleraRealMapServersSwedenKeywordPage, { generateMetadata } from './evolera-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraRealMapServersSwedenKeywordPage />;
}
