import MiracleRealMapKeywordPage, { generateMetadata } from './miracle-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRealMapKeywordPage />;
}
