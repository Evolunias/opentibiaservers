import CalmeraOt80SeasonalServerKeywordPage, { generateMetadata } from './calmera-ot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt80SeasonalServerKeywordPage />;
}
