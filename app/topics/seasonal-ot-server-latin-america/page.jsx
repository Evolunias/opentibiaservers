import SeasonalOtServerLatinAmericaKeywordPage, { generateMetadata } from './seasonal-ot-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOtServerLatinAmericaKeywordPage />;
}
