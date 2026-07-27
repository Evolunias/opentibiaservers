import RookgaardTalesChileServerKeywordPage, { generateMetadata } from './rookgaard-tales-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesChileServerKeywordPage />;
}
