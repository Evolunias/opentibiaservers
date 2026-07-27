import SeasonalOtServerUkKeywordPage, { generateMetadata } from './seasonal-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOtServerUkKeywordPage />;
}
