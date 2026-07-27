import UnlineRealMapServerCanadaKeywordPage, { generateMetadata } from './unline-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineRealMapServerCanadaKeywordPage />;
}
