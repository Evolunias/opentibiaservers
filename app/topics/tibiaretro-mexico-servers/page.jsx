import TibiaretroMexicoServersKeywordPage, { generateMetadata } from './tibiaretro-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroMexicoServersKeywordPage />;
}
