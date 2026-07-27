import TibiaretroFranceServerKeywordPage, { generateMetadata } from './tibiaretro-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroFranceServerKeywordPage />;
}
