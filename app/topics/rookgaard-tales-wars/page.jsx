import RookgaardTalesWarsKeywordPage, { generateMetadata } from './rookgaard-tales-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesWarsKeywordPage />;
}
