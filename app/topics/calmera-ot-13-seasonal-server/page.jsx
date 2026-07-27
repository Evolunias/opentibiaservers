import CalmeraOt13SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt13SeasonalServerKeywordPage />;
}
