import EternalOdyssey12SeasonalServerKeywordPage, { generateMetadata } from './eternal-odyssey-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdyssey12SeasonalServerKeywordPage />;
}
