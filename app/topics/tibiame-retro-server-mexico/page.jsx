import TibiameRetroServerMexicoKeywordPage, { generateMetadata } from './tibiame-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRetroServerMexicoKeywordPage />;
}
