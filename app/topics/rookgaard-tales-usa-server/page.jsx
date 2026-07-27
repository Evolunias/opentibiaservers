import RookgaardTalesUsaServerKeywordPage, { generateMetadata } from './rookgaard-tales-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesUsaServerKeywordPage />;
}
