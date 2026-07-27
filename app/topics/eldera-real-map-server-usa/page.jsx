import ElderaRealMapServerUsaKeywordPage, { generateMetadata } from './eldera-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRealMapServerUsaKeywordPage />;
}
