import SeasonalClientNorthAmericaKeywordPage, { generateMetadata } from './seasonal-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientNorthAmericaKeywordPage />;
}
