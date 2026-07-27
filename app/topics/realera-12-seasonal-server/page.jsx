import Realera12SeasonalServerKeywordPage, { generateMetadata } from './realera-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12SeasonalServerKeywordPage />;
}
