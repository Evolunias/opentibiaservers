import ElderaPvpeKeywordPage, { generateMetadata } from './eldera-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpeKeywordPage />;
}
