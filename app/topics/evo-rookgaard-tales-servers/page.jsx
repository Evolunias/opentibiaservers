import EvoRookgaardTalesServersKeywordPage, { generateMetadata } from './evo-rookgaard-tales-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRookgaardTalesServersKeywordPage />;
}
