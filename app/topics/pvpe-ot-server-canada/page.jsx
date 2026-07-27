import PvpeOtServerCanadaKeywordPage, { generateMetadata } from './pvpe-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOtServerCanadaKeywordPage />;
}
