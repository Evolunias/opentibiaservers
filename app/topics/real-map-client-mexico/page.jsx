import RealMapClientMexicoKeywordPage, { generateMetadata } from './real-map-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientMexicoKeywordPage />;
}
