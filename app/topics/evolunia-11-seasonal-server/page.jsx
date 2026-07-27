import Evolunia11SeasonalServerKeywordPage, { generateMetadata } from './evolunia-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia11SeasonalServerKeywordPage />;
}
