import RookgaardTalesMapKeywordPage, { generateMetadata } from './rookgaard-tales-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesMapKeywordPage />;
}
