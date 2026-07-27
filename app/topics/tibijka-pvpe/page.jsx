import TibijkaPvpeKeywordPage, { generateMetadata } from './tibijka-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpeKeywordPage />;
}
