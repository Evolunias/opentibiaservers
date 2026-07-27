import ElderaRealMapServersSwedenKeywordPage, { generateMetadata } from './eldera-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRealMapServersSwedenKeywordPage />;
}
