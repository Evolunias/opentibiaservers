import Evolunia84SeasonalServerKeywordPage, { generateMetadata } from './evolunia-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia84SeasonalServerKeywordPage />;
}
