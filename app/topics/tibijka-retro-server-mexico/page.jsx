import TibijkaRetroServerMexicoKeywordPage, { generateMetadata } from './tibijka-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRetroServerMexicoKeywordPage />;
}
