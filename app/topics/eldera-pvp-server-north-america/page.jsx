import ElderaPvpServerNorthAmericaKeywordPage, { generateMetadata } from './eldera-pvp-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpServerNorthAmericaKeywordPage />;
}
