import CalmeraOt76SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt76SeasonalServerKeywordPage />;
}
