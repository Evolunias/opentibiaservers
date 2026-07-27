import RookgaardTalesPolandServersKeywordPage, { generateMetadata } from './rookgaard-tales-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesPolandServersKeywordPage />;
}
