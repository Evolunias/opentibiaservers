import RookgaardTalesTrailerKeywordPage, { generateMetadata } from './rookgaard-tales-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesTrailerKeywordPage />;
}
