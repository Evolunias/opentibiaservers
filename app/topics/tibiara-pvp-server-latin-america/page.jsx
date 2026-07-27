import TibiaraPvpServerLatinAmericaKeywordPage, { generateMetadata } from './tibiara-pvp-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpServerLatinAmericaKeywordPage />;
}
