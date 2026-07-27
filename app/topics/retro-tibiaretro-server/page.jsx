import RetroTibiaretroServerKeywordPage, { generateMetadata } from './retro-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaretroServerKeywordPage />;
}
