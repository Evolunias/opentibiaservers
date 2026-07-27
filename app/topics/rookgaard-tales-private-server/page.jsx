import RookgaardTalesPrivateServerKeywordPage, { generateMetadata } from './rookgaard-tales-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesPrivateServerKeywordPage />;
}
