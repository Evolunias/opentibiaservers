import RookgaardTalesExpRateKeywordPage, { generateMetadata } from './rookgaard-tales-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesExpRateKeywordPage />;
}
