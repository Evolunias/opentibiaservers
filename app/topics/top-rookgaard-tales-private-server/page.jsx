import TopRookgaardTalesPrivateServerKeywordPage, { generateMetadata } from './top-rookgaard-tales-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesPrivateServerKeywordPage />;
}
