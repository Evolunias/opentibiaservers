import RetroTibiameServerKeywordPage, { generateMetadata } from './retro-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiameServerKeywordPage />;
}
