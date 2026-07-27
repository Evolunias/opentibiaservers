import SabrehavenPvpServerLatinAmericaKeywordPage, { generateMetadata } from './sabrehaven-pvp-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPvpServerLatinAmericaKeywordPage />;
}
