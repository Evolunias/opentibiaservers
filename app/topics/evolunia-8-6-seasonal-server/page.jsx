import Evolunia86SeasonalServerKeywordPage, { generateMetadata } from './evolunia-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia86SeasonalServerKeywordPage />;
}
