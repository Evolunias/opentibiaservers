import Realera86SeasonalServerKeywordPage, { generateMetadata } from './realera-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera86SeasonalServerKeywordPage />;
}
