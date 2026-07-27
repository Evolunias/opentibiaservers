import TopRookgaardTalesKeywordPage, { generateMetadata } from './top-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesKeywordPage />;
}
