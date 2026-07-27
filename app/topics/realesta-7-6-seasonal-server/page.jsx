import Realesta76SeasonalServerKeywordPage, { generateMetadata } from './realesta-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta76SeasonalServerKeywordPage />;
}
