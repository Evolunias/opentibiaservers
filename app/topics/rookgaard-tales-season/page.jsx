import RookgaardTalesSeasonKeywordPage, { generateMetadata } from './rookgaard-tales-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesSeasonKeywordPage />;
}
