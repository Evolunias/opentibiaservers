import Realera84SeasonalServerKeywordPage, { generateMetadata } from './realera-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera84SeasonalServerKeywordPage />;
}
