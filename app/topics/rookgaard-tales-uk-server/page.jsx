import RookgaardTalesUkServerKeywordPage, { generateMetadata } from './rookgaard-tales-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesUkServerKeywordPage />;
}
