import TibijkaPvpeServerBrazilKeywordPage, { generateMetadata } from './tibijka-pvpe-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpeServerBrazilKeywordPage />;
}
