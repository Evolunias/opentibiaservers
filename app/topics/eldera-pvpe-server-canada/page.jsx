import ElderaPvpeServerCanadaKeywordPage, { generateMetadata } from './eldera-pvpe-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpeServerCanadaKeywordPage />;
}
