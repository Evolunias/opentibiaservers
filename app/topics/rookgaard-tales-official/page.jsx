import RookgaardTalesOfficialKeywordPage, { generateMetadata } from './rookgaard-tales-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesOfficialKeywordPage />;
}
