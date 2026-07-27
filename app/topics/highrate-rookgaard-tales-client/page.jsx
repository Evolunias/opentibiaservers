import HighrateRookgaardTalesClientKeywordPage, { generateMetadata } from './highrate-rookgaard-tales-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRookgaardTalesClientKeywordPage />;
}
