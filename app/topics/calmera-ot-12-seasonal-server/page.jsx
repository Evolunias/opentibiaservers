import CalmeraOt12SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt12SeasonalServerKeywordPage />;
}
