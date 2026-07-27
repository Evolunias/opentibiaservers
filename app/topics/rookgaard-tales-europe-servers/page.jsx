import RookgaardTalesEuropeServersKeywordPage, { generateMetadata } from './rookgaard-tales-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesEuropeServersKeywordPage />;
}
