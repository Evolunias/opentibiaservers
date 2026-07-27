import KasteriaRetroServerMexicoKeywordPage, { generateMetadata } from './kasteria-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRetroServerMexicoKeywordPage />;
}
