import RookgaardTalesBossesKeywordPage, { generateMetadata } from './rookgaard-tales-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesBossesKeywordPage />;
}
