import CalmeraOt81SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt81SeasonalServerKeywordPage />;
}
