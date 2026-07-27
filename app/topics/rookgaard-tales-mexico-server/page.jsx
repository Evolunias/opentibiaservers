import RookgaardTalesMexicoServerKeywordPage, { generateMetadata } from './rookgaard-tales-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesMexicoServerKeywordPage />;
}
