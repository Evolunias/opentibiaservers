import EternalOdyssey13SeasonalServerKeywordPage, { generateMetadata } from './eternal-odyssey-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdyssey13SeasonalServerKeywordPage />;
}
