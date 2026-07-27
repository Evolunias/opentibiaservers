import RookgaardTalesUsaServersKeywordPage, { generateMetadata } from './rookgaard-tales-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesUsaServersKeywordPage />;
}
