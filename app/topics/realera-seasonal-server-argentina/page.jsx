import RealeraSeasonalServerArgentinaKeywordPage, { generateMetadata } from './realera-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSeasonalServerArgentinaKeywordPage />;
}
