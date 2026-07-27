import CalmeraOt71SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt71SeasonalServerKeywordPage />;
}
