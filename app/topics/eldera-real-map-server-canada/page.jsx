import ElderaRealMapServerCanadaKeywordPage, { generateMetadata } from './eldera-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRealMapServerCanadaKeywordPage />;
}
