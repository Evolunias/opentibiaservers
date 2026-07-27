import SabrehavenPvpServerUsaKeywordPage, { generateMetadata } from './sabrehaven-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPvpServerUsaKeywordPage />;
}
