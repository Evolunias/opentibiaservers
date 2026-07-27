import Realera11SeasonalServerKeywordPage, { generateMetadata } from './realera-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11SeasonalServerKeywordPage />;
}
