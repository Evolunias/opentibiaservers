import RetroTibiaraServerKeywordPage, { generateMetadata } from './retro-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaraServerKeywordPage />;
}
