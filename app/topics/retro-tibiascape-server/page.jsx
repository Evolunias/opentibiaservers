import RetroTibiascapeServerKeywordPage, { generateMetadata } from './retro-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiascapeServerKeywordPage />;
}
