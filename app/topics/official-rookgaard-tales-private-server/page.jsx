import OfficialRookgaardTalesPrivateServerKeywordPage, { generateMetadata } from './official-rookgaard-tales-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRookgaardTalesPrivateServerKeywordPage />;
}
