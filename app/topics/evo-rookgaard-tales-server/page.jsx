import EvoRookgaardTalesServerKeywordPage, { generateMetadata } from './evo-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRookgaardTalesServerKeywordPage />;
}
