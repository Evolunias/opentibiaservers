import PvpeOtServerLatinAmericaKeywordPage, { generateMetadata } from './pvpe-ot-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOtServerLatinAmericaKeywordPage />;
}
