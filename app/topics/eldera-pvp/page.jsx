import ElderaPvpKeywordPage, { generateMetadata } from './eldera-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpKeywordPage />;
}
