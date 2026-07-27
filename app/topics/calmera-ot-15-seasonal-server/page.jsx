import CalmeraOt15SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt15SeasonalServerKeywordPage />;
}
