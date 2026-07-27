import PopularRookgaardTalesPrivateServerKeywordPage, { generateMetadata } from './popular-rookgaard-tales-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRookgaardTalesPrivateServerKeywordPage />;
}
