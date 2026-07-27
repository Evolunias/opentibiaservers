import TibiaretroMexicoServerKeywordPage, { generateMetadata } from './tibiaretro-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroMexicoServerKeywordPage />;
}
