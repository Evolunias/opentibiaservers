import RookgaardTalesCanadaServersKeywordPage, { generateMetadata } from './rookgaard-tales-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesCanadaServersKeywordPage />;
}
