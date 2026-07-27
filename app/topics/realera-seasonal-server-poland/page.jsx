import RealeraSeasonalServerPolandKeywordPage, { generateMetadata } from './realera-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSeasonalServerPolandKeywordPage />;
}
