import SeasonalOtServerEuropeKeywordPage, { generateMetadata } from './seasonal-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOtServerEuropeKeywordPage />;
}
