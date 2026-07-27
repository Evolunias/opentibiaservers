import TibijkaPvpeServerUkKeywordPage, { generateMetadata } from './tibijka-pvpe-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpeServerUkKeywordPage />;
}
