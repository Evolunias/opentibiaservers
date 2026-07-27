import CalmeraOt100SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt100SeasonalServerKeywordPage />;
}
