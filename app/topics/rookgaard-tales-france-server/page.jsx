import RookgaardTalesFranceServerKeywordPage, { generateMetadata } from './rookgaard-tales-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesFranceServerKeywordPage />;
}
