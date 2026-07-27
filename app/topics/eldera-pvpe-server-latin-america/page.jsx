import ElderaPvpeServerLatinAmericaKeywordPage, { generateMetadata } from './eldera-pvpe-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpeServerLatinAmericaKeywordPage />;
}
