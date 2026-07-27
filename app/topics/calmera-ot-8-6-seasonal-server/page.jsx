import CalmeraOt86SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt86SeasonalServerKeywordPage />;
}
