import Realera71SeasonalServerKeywordPage, { generateMetadata } from './realera-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera71SeasonalServerKeywordPage />;
}
