import RetroTibijkaServerKeywordPage, { generateMetadata } from './retro-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibijkaServerKeywordPage />;
}
