import CalmeraOt84SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt84SeasonalServerKeywordPage />;
}
