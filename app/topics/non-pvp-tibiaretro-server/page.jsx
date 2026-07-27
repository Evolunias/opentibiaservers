import NonPvpTibiaretroServerKeywordPage, { generateMetadata } from './non-pvp-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpTibiaretroServerKeywordPage />;
}
