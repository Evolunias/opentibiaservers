import TibiaretroNonPvpServerUsaKeywordPage, { generateMetadata } from './tibiaretro-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroNonPvpServerUsaKeywordPage />;
}
