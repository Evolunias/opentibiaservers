import HighrateRookgaardTalesLoginKeywordPage, { generateMetadata } from './highrate-rookgaard-tales-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRookgaardTalesLoginKeywordPage />;
}
