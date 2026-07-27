import HighrateRookgaardTalesServerKeywordPage, { generateMetadata } from './highrate-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRookgaardTalesServerKeywordPage />;
}
