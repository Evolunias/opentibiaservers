import Realera81SeasonalServerKeywordPage, { generateMetadata } from './realera-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera81SeasonalServerKeywordPage />;
}
