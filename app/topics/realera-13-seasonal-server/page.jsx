import Realera13SeasonalServerKeywordPage, { generateMetadata } from './realera-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13SeasonalServerKeywordPage />;
}
