import PvpeOtServerMexicoKeywordPage, { generateMetadata } from './pvpe-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOtServerMexicoKeywordPage />;
}
