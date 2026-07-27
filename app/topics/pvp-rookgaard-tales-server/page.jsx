import PvpRookgaardTalesServerKeywordPage, { generateMetadata } from './pvp-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRookgaardTalesServerKeywordPage />;
}
