import NtoStarRetroServerMexicoKeywordPage, { generateMetadata } from './nto-star-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerMexicoKeywordPage />;
}
