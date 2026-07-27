import SeasonalOtServerNorthAmericaKeywordPage, { generateMetadata } from './seasonal-ot-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOtServerNorthAmericaKeywordPage />;
}
