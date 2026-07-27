import RetroRookgaardTalesServerKeywordPage, { generateMetadata } from './retro-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRookgaardTalesServerKeywordPage />;
}
