import RookgaardTalesPolandServerKeywordPage, { generateMetadata } from './rookgaard-tales-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesPolandServerKeywordPage />;
}
