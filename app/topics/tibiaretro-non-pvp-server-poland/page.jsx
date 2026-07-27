import TibiaretroNonPvpServerPolandKeywordPage, { generateMetadata } from './tibiaretro-non-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroNonPvpServerPolandKeywordPage />;
}
