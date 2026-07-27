import FreshStartRookgaardTalesKeywordPage, { generateMetadata } from './fresh-start-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRookgaardTalesKeywordPage />;
}
