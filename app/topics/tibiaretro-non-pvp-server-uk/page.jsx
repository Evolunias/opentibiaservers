import TibiaretroNonPvpServerUkKeywordPage, { generateMetadata } from './tibiaretro-non-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroNonPvpServerUkKeywordPage />;
}
