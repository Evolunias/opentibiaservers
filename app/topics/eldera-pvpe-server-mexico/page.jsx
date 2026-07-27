import ElderaPvpeServerMexicoKeywordPage, { generateMetadata } from './eldera-pvpe-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpeServerMexicoKeywordPage />;
}
