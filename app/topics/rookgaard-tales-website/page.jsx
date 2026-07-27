import RookgaardTalesWebsiteKeywordPage, { generateMetadata } from './rookgaard-tales-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesWebsiteKeywordPage />;
}
