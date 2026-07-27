import SabrehavenNonPvpServerNorthAmericaKeywordPage, { generateMetadata } from './sabrehaven-non-pvp-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenNonPvpServerNorthAmericaKeywordPage />;
}
