import CalmeraOt96SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt96SeasonalServerKeywordPage />;
}
