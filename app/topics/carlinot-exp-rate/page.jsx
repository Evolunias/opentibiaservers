import CarlinotExpRateKeywordPage, { generateMetadata } from './carlinot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotExpRateKeywordPage />;
}
