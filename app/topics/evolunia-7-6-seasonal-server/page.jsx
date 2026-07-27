import Evolunia76SeasonalServerKeywordPage, { generateMetadata } from './evolunia-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia76SeasonalServerKeywordPage />;
}
