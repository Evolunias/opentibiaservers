import NtoStarMexicoServerKeywordPage, { generateMetadata } from './nto-star-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarMexicoServerKeywordPage />;
}
