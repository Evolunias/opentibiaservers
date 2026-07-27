import RookgaardTalesGermanyServerKeywordPage, { generateMetadata } from './rookgaard-tales-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesGermanyServerKeywordPage />;
}
