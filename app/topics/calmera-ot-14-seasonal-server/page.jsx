import CalmeraOt14SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt14SeasonalServerKeywordPage />;
}
