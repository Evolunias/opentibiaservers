import TibiantisRetroServerMexicoKeywordPage, { generateMetadata } from './tibiantis-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRetroServerMexicoKeywordPage />;
}
