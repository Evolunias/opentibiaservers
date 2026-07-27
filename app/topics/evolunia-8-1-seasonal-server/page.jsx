import Evolunia81SeasonalServerKeywordPage, { generateMetadata } from './evolunia-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia81SeasonalServerKeywordPage />;
}
