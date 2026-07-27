import TibiaraPvpeServerLatinAmericaKeywordPage, { generateMetadata } from './tibiara-pvpe-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpeServerLatinAmericaKeywordPage />;
}
