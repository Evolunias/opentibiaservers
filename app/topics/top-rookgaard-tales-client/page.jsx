import TopRookgaardTalesClientKeywordPage, { generateMetadata } from './top-rookgaard-tales-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesClientKeywordPage />;
}
