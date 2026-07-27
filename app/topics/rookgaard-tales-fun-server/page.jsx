import RookgaardTalesFunServerKeywordPage, { generateMetadata } from './rookgaard-tales-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesFunServerKeywordPage />;
}
