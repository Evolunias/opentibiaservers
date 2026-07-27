import PvpeCalmeraOtServerKeywordPage, { generateMetadata } from './pvpe-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeCalmeraOtServerKeywordPage />;
}
