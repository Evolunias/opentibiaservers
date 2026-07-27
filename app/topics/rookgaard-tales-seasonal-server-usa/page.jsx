import RookgaardTalesSeasonalServerUsaKeywordPage, { generateMetadata } from './rookgaard-tales-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesSeasonalServerUsaKeywordPage />;
}
