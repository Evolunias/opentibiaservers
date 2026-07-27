import PopularRookgaardTalesKeywordPage, { generateMetadata } from './popular-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRookgaardTalesKeywordPage />;
}
