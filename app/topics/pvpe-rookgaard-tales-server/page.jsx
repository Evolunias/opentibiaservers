import PvpeRookgaardTalesServerKeywordPage, { generateMetadata } from './pvpe-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRookgaardTalesServerKeywordPage />;
}
