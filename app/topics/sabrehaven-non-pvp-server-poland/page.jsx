import SabrehavenNonPvpServerPolandKeywordPage, { generateMetadata } from './sabrehaven-non-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenNonPvpServerPolandKeywordPage />;
}
