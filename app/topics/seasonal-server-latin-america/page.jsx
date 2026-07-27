import SeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerLatinAmericaKeywordPage />;
}
