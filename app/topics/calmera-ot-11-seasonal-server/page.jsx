import CalmeraOt11SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt11SeasonalServerKeywordPage />;
}
