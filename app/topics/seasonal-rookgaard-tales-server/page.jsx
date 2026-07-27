import SeasonalRookgaardTalesServerKeywordPage, { generateMetadata } from './seasonal-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRookgaardTalesServerKeywordPage />;
}
