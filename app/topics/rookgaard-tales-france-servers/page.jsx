import RookgaardTalesFranceServersKeywordPage, { generateMetadata } from './rookgaard-tales-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesFranceServersKeywordPage />;
}
