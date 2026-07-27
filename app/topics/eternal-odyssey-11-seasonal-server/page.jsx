import EternalOdyssey11SeasonalServerKeywordPage, { generateMetadata } from './eternal-odyssey-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdyssey11SeasonalServerKeywordPage />;
}
