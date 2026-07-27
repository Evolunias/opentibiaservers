import SeasonalClientCanadaKeywordPage, { generateMetadata } from './seasonal-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientCanadaKeywordPage />;
}
