import ElderaPvpeServerFranceKeywordPage, { generateMetadata } from './eldera-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpeServerFranceKeywordPage />;
}
