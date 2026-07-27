import TibijkaPvpeServerPolandKeywordPage, { generateMetadata } from './tibijka-pvpe-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpeServerPolandKeywordPage />;
}
