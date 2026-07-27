import HighrateRookgaardTalesKeywordPage, { generateMetadata } from './highrate-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRookgaardTalesKeywordPage />;
}
