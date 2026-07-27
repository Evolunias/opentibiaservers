import SeasonalOtServerCanadaKeywordPage, { generateMetadata } from './seasonal-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOtServerCanadaKeywordPage />;
}
