import TibiaretroFranceServersKeywordPage, { generateMetadata } from './tibiaretro-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroFranceServersKeywordPage />;
}
