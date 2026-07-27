import Evolunia13SeasonalServerKeywordPage, { generateMetadata } from './evolunia-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13SeasonalServerKeywordPage />;
}
