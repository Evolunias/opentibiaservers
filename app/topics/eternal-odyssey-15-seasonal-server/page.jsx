import EternalOdyssey15SeasonalServerKeywordPage, { generateMetadata } from './eternal-odyssey-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdyssey15SeasonalServerKeywordPage />;
}
